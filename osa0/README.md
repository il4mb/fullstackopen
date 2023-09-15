# Exercises 0

## 0.4: New note diagram

```mermaid

sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Write note and click Save
    activate browser

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: Note saved
    deactivate server

    browser-->>user: Note saved confirmation
    deactivate browser

```

## 0.5: Single page app diagram

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Go to https://studies.cs.helsinki.fi/exampleapp/spa
    activate browser

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: SPA page loaded
    deactivate server

    browser-->>user: SPA page displayed
    deactivate browser

```

## 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Enter text and click Save
    activate browser

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa/new_note
    activate server
    server-->>browser: New note saved
    deactivate server

    browser-->>user: Note saved confirmation
    deactivate browser

```
