Quick Setup

```
git clone https://github.com/shaunak24/youtube-clone.git
cd youtube-clone
npm install
npm start
```

Tips for Machine Coding Round -

- Clarify the requirements. Never start coding directly (5 min)

  - Features
  - Tech Stack (UI layer vs Data layer). Provide justification for every small thing
  - Redux vs Context API
  - Other Libraries (Ex. Formik for forms)
  - Routing (Ex. react-router-dom)
  - Bundler (Ex. Parcel, Webpack)
  - Testing library (Ex. React Testing Library)

- Planning (5 min)
  - Discuss UI components. Divide the application

What is debouncing?

- Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently, by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, and API calls and improve performance.
- Debouncing with 200ms
  - if difference between 2 key strokes < 200ms, decline API call
  - else make API call

Building Live Chat

- Challenges
  - Fetching live data
  - How to update the UI live?
- We can handle live data using -
  - Web sockets
    - like a handshake (bi-directional) between server and client
    - no specific time interval to receive data
  - API Polling
    - Data flows from server to client (Uni-directional)
    - After a particular interval

Additional hooks (useMemo, useCallback, useRef)

- useMemo is a React Hook that lets you cache the result of a calculation between re-renders
- To avoid heavy operations for every (unrelated) re-render, we place it inside useMemo
- Ex. const cachedValue = useMemo(calculateValue, dependencies);

- useCallback is a React Hook that lets you cache a function definition between re-renders
- Ex. const cachedFn = useCallback(fn, dependencies);

- useRef is a React Hook that lets you reference a value that’s not needed for rendering
- Ex. const ref = useRef(initialValue);
