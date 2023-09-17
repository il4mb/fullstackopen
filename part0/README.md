# Exercises 0

## 0.4: New note diagram

```mermaid

sequenceDiagram
    actor user
    participant browser
    participant server

    user->>browser: Enter site url
    activate browser

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML Document 
    deactivate server

    browser-->>user: Display empty page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file 
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: XHR:GET https://studies.cs.helsinki.fi/exampleapp/data.json 
    activate server
    server-->>browser: JSON Response
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

    browser-->>user: Show Notes List
    deactivate browser

```

## 0.5: Single page app diagram

```mermaid
sequenceDiagram
    actor user
    participant browser
    participant server

    user->>browser: Enter site url
    activate browser

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML Document
    deactivate server

    browser-->>user: SPA page displayed

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file 
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript File
    deactivate server

    Note right of browser: Now browser execute the callback js function

    browser->>server: XHR:GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON Response
    deactivate server

    Note right of browser: Now browser render list of data from XHR Request

    browser-->>user: Display list
    deactivate browser

```

## 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
    actor user
    participant browser
    participant server

    user->>browser: Enter text and click Save
    activate browser

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->server: Add text to JSON data
    server-->>browser: New note saved
    deactivate server

    browser-->browser: Reload Page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML Document 
    deactivate server

    browser-->>user: Display empty page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file 
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: XHR:GET https://studies.cs.helsinki.fi/exampleapp/data.json 
    activate server
    server-->>browser: JSON Response
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

    browser-->>user: Show Notes List
    deactivate browser

```
