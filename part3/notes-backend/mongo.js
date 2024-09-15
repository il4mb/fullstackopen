const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the MongoDB password as an argument.')
  process.exit(1)
}

const credentials = process.argv[2]
if (!credentials.includes(':')) {
  console.error('Invalid credentials')
  process.exit()
}
const password = credentials.split(':')[1]
const username = credentials.split(':')[0]
const args = process.argv.slice(3)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

class Command {
  constructor(accept, handle) {
    this.accept = accept
    this.handle = handle
  }
}

const commandHandlers = [
  new Command(
    (args) => args.length === 1 && args[0] === 'initial',
    async () => {
      const notes = [
        {
          'content': 'HTML is easy',
          'important': true
        },
        {
          'content': 'Browser can execute only JavaScript',
          'important': false
        },
        {
          'content': 'GET and POST are the most important methods of HTTP protocol',
          'important': true
        }
      ]


      try {
        for (const n of notes) {
          await new Note(n).save()
        }
        console.log('All notes saved successfully!')
      } catch (error) {
        console.error('Error saving notes:', error.message)
      }
    }
  ),
  new Command(
    (args) => args.length === 0,
    async () => {
      try {
        const result = await Note.find({})
        console.log('notes:')
        result.forEach(p => console.log(`content: ${p.content}\nimportant : ${p.important ? 'TRUE' : 'FALSE'}\n`))
      } catch (error) {
        console.error('Error retrieving persons:', error.message)
      }
    }
  ),
  new Command(
    (args) => args.length === 2,
    async (args) => {
      const [content, important] = args
      const person = new Note({ content, important })

      try {
        await person.save()
        console.log(`added ${content} important ${important ? 'TRUE' : 'FASLE'} to phonebook`)
      } catch (error) {
        console.error('Error saving person:', error.message)
      }
    }
  )
]

const commandInterpreter = async () => {
  const handler = commandHandlers.find(h => h.accept(args))

  if (!handler) {
    console.error('Unknown command.')
    return
  }

  const url = `mongodb+srv://${username}:${password}@cluster0.lqv1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(url)
    await handler.handle(args)
  } catch (error) {
    console.error('Database connection error:', error.message)
  } finally {
    mongoose.connection.close()
  }
}

commandInterpreter()
