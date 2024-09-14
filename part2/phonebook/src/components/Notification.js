const Notification = ({ message, type }) => {
    if (message === null) {
        return null
    }

    return (
        <div className={['notification', type ?? 'default'].join(' ')}>
            {message}
        </div>
    )
}

export default Notification;