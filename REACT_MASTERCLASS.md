# React Masterclass for an Experienced Angular Developer

This guide assumes you already know Angular architecture, TypeScript, RxJS, DI, routing, lazy loading, signals, reactive forms, and enterprise frontend patterns. The goal is not to teach React as if you were a beginner. The goal is to help you translate Angular thinking into React thinking quickly and interview-ready.

---

## 1. What React Is, and Why It Exists

### What is React?
React is a UI library for building component-based user interfaces. It focuses on rendering predictable views from state and props.

### Why was React created?
React was created to solve the pain of building large, interactive UIs with imperative DOM updates. The original problem was not “HTML is bad”; it was that manually manipulating the DOM for every state change became hard to reason about at scale.

### Problems React solved
- Complex DOM updates became hard to manage manually.
- UI state and DOM state drifted apart.
- Re-rendering and performance were difficult to optimize in large apps.
- Teams needed a declarative model for UI updates.

### Angular equivalent
Angular solved a similar problem with change detection, templates, and data binding. Angular gives you a framework with strong conventions, while React gives you a library with a narrower core and a larger ecosystem.

### React philosophy
React is built around these ideas:
- Declarative UI
- Composition over inheritance
- Unidirectional data flow
- State as the source of truth
- Explicit rendering from props and state

### Angular comparison
| Topic | React | Angular |
|---|---|---|
| Core model | Library | Framework |
| UI definition | JSX | Templates |
| State | State, props, context, external stores | Components, services, signals, RxJS |
| Rendering | Re-render on state/prop change | Change detection cycle |
| Data flow | One-way from parent to child | One-way and two-way binding in forms |
| Architecture | Flexible ecosystem | Opinionated and structured |

### Summary
React is not “Angular without decorators.” It is a different mental model: you describe what should be rendered, and React figures out the efficient updates.

---

## 2. Declarative UI, Component-Based Architecture, and One-Way Data Flow

### Declarative UI
In React, you write UI as a function of state:

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

You describe the state and the UI shape. React updates the DOM when state changes.

### Angular equivalent
Angular templates are also declarative, but Angular ties this to a framework-level change detection mechanism and templates.

### Why React does it differently
React keeps the model simple: UI is derived from data. That makes it easier to compose and test, but it also means you need to be explicit about state, effects, and updates.

### One-way data flow
Props move down; events move up. Parent passes data to child, child emits events or callbacks.

```tsx
function Parent() {
  const [name, setName] = useState('Ada');

  return <Child name={name} onNameChange={setName} />;
}

function Child({ name, onNameChange }: { name: string; onNameChange: (value: string) => void }) {
  return <input value={name} onChange={(e) => onNameChange(e.target.value)} />;
}
```

### Angular equivalent
Angular also uses unidirectional data flow in most app architecture, but it often relies on services and RxJS for cross-cutting state and event streams.

### Summary
React favors a simpler mental model: state → render → update. Angular adds more structure and framework conventions around the same idea.

---

## 3. Virtual DOM, Reconciliation, and Fiber Architecture

### What is the Virtual DOM?
React creates an in-memory representation of the UI tree called the Virtual DOM. When state changes, React builds a new virtual tree and diffs it against the previous one.

### Why React uses it
It allows React to minimize direct DOM mutations and batch updates efficiently.

### Angular equivalent
Angular uses its own change detection mechanism. Angular does not rely on a React-style virtual DOM abstraction in the same way, although it also tries to minimize expensive DOM work.

### Reconciliation
Reconciliation is the diffing process React uses to decide what changed.

### Fiber architecture
React Fiber is the internal engine that allows rendering to be split into units of work and interrupted if needed. This enables features like:
- concurrent rendering
- interruptible work
- better responsiveness

### Why Angular developers get confused here
Angular developers often assume React is “just faster DOM updates.” In reality, React’s architecture is about scheduling and prioritization, not just diffing.

### Rendering process
1. State or props change.
2. Component function is re-evaluated.
3. React builds a new virtual tree.
4. React diffs against the previous tree.
5. Only the necessary DOM ops are applied.

### Summary
React is not just “rendering markup.” It is a scheduler, diffing engine, and rendering pipeline combined.

---

## 4. Hydration, CSR, SSR, SSG, and React Server Components

### CSR (Client-Side Rendering)
The browser downloads JavaScript, then renders the app on the client.

### SSR (Server-Side Rendering)
The HTML is generated on the server, then hydrated on the client.

### SSG (Static Site Generation)
Pages are generated at build time.

### Hydration
Hydration is the process where the server-rendered HTML is connected to the client-side React app.

### React Server Components
React Server Components let you render components on the server without sending their code to the browser. They are ideal for server-only data access and large data-heavy components.

### Angular equivalent
Angular has SSR support via Angular Universal and SSG options via prerendering. Angular is strong in enterprise SSR, but React’s server ecosystem is more flexible and more widely adopted in modern web apps.

### When to use each
- CSR: internal admin apps, dashboards
- SSR: SEO-heavy marketing sites, content sites
- SSG: blogs, documentation, landing pages
- RSC: data-heavy apps with strong server-side data access

### Summary
If you are coming from Angular, think of React’s server rendering story as a spectrum: CSR → SSR → SSG → RSC.

---

## 5. React Project Creation: Vite, CRA, Next.js, and Remix

### Vite
Vite is the modern default for React apps.

#### Create a project
```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

### CRA (Create React App)
CRA was the old standard. It is now effectively legacy for new projects.

```bash
npx create-react-app my-app
```

### Next.js
Next.js is a full-stack React framework with routing, SSR, SSG, API routes, and deployment optimizations.

```bash
npx create-next-app@latest my-app
```

### Remix
Remix is a framework focused on web fundamentals, nested routing, and progressive enhancement.

```bash
npx create-remix@latest my-app
```

### Why Vite is preferred now
- Faster startup
- Faster HMR
- Simpler config
- Excellent TypeScript support
- Better DX for modern SPAs

### What happens internally when you create a Vite React app?
1. Vite scaffolds a minimal project structure.
2. It installs React, ReactDOM, and Vite plugins.
3. It creates an HTML entry file.
4. It sets up a development server using esbuild.
5. It configures module resolution and transform pipeline for JSX/TSX.

### Angular equivalent
Angular CLI performs similar scaffolding but is more opinionated and framework-integrated.

---

## 6. A Real Enterprise React Project Structure

A mature React project usually looks like this:

```text
src/
  api/
  assets/
  components/
    common/
  config/
  constants/
  contexts/
  features/
    auth/
    dashboard/
    payments/
  hooks/
  layouts/
  pages/
  routes/
  services/
  store/
  styles/
  types/
  utils/
  App.tsx
  main.tsx
```

### Folder-by-folder explanation

#### src/
Purpose: root source directory.
Why it exists: keeps app code isolated from build and config files.
Angular equivalent: src folder in Angular projects.
Who uses it: all developers.
When it loads: during app build and runtime.
Best practices: keep feature code grouped by domain.

#### assets/
Purpose: images, icons, fonts, static files.
Angular equivalent: assets/.
Best practices: keep assets versioned and compressed.

#### components/
Purpose: reusable UI building blocks.
Angular equivalent: shared components or shared module components.
Best practices: keep them presentational and stateless when possible.

#### components/common/
Purpose: generic UI components like Button, Input, Modal, Table.
Angular equivalent: shared UI components.
Best practices: avoid app-specific business logic here.

#### hooks/
Purpose: reusable stateful logic.
Angular equivalent: custom services or utility classes with RxJS logic.
Best practices: keep them focused and composable.

#### contexts/
Purpose: provide shared state without external libraries.
Angular equivalent: services plus BehaviorSubject or signals, or DI-based providers.
Best practices: use for moderate global state; avoid abusing this as a global store.

#### services/
Purpose: API calls, business logic, persistence wrappers.
Angular equivalent: Angular services.
Best practices: keep them domain-specific and testable.

#### api/
Purpose: network layer and endpoint definitions.
Angular equivalent: HttpClient service wrappers.
Best practices: centralize URL construction and error mapping.

#### store/
Purpose: global state management via Redux or Zustand.
Angular equivalent: NgRx or service-based state.
Best practices: use only when state complexity justifies it.

#### routes/
Purpose: route definitions and route configuration.
Angular equivalent: app-routing.module or standalone route config.
Best practices: keep route declarations readable and domain-driven.

#### features/
Purpose: vertical slices of the app.
Angular equivalent: feature modules or standalone feature folders.
Best practices: align folders to business capabilities.

#### pages/
Purpose: route-level views.
Angular equivalent: route components or feature pages.
Best practices: keep pages thin and orchestration-focused.

#### layouts/
Purpose: shared page shells such as dashboards and auth layouts.
Angular equivalent: layout components and router-outlet wrappers.
Best practices: compose layouts and route content cleanly.

#### utils/
Purpose: reusable helper functions.
Angular equivalent: shared utilities and pipes-like transformation helpers.
Best practices: keep them pure and well-tested.

#### types/
Purpose: TypeScript domain types.
Angular equivalent: interfaces and DTOs.
Best practices: keep domain models explicit and centralized.

#### constants/
Purpose: static values, config strings, enum-like values.
Angular equivalent: constants or enums.
Best practices: avoid hardcoded strings scattered across components.

#### styles/
Purpose: app-wide style layer, theme tokens, global CSS.
Angular equivalent: global styles and theme files.
Best practices: prefer design tokens over ad hoc CSS.

---

## 7. Explain Every File in a Typical React Vite Project

### package.json
Why it exists: defines scripts, dependencies, and metadata.
Who created it: the project generator and you.
When it executes: during install, dev, build, and test runs.
Can we delete it? No, not safely.
What happens if modified? You change scripts and dependency versions.
Angular equivalent: package.json in Angular CLI projects.
Interview question: What is the difference between dependencies and devDependencies?

### package-lock.json
Why it exists: locks dependency versions.
Who created it: npm.
When it executes: during install.
Can we delete it? Yes, but it will be regenerated.
Angular equivalent: package-lock.json is similar to npm lockfiles in Angular.

### tsconfig.json
Why it exists: configures TypeScript compiler options.
Who created it: Vite template.
When it executes: during type-checking and build.
Can we delete it? You can, but the project may stop compiling correctly.
Angular equivalent: tsconfig.json in Angular.

### vite.config.ts
Why it exists: configures Vite, plugins, aliases, and build behavior.
Who created it: Vite template.
When it executes: during dev/build server startup.
Can we delete it? You can, but Vite loses configuration.
Angular equivalent: angular.json and build config.

### .gitignore
Why it exists: keeps junk files out of version control.
Who created it: template.
Can we delete it? You can, but your repo will be noisier.
Angular equivalent: .gitignore in Angular projects.

### index.html
Why it exists: root HTML file that Vite uses as entry point.
Who created it: Vite template.
When it executes: on initial page load.
Can we delete it? No, the app will not mount correctly.
Angular equivalent: index.html in Angular.

### src/main.tsx
Why it exists: mounts React into the DOM.
Who created it: Vite template.
When it executes: immediately when the app starts.
Angular equivalent: main.ts in Angular bootstrap.

### src/App.tsx
Why it exists: root component of the application.
Who created it: Vite template.
When it executes: during rendering.
Angular equivalent: app component.

### src/index.css
Why it exists: global styles.
Who created it: Vite template.
Can we delete it? Yes, if you replace with your own styling strategy.
Angular equivalent: styles.css.

### public/
Why it exists: static files copied directly to the build output.
Who created it: Vite template.
Can we delete it? Yes if you do not use static assets there.
Angular equivalent: src/assets or public assets in Angular.

### node_modules/
Why it exists: installed dependencies.
Who created it: npm.
Can we delete it? Yes, but you lose installed packages.
Angular equivalent: node_modules in Angular.

---

## 8. React Rendering Flow from Browser Startup

The execution path looks like this:

```text
Browser
  ↓
index.html
  ↓
main.tsx
  ↓
createRoot()
  ↓
ReactDOM / React runtime
  ↓
App.tsx
  ↓
Component tree
  ↓
DOM updates
```

### Step 1: Browser requests the page
The browser loads index.html.

### Step 2: index.html loads scripts
Vite injects the module entry for main.tsx.

### Step 3: main.tsx runs
This file calls ReactDOM.createRoot and renders the app.

### Step 4: React creates root container
The root element in index.html is selected and used as the mounting point.

### Step 5: App.tsx is evaluated
The component tree is rendered.

### Step 6: React builds the virtual tree
React creates a representation of the DOM structure in memory.

### Step 7: React patches the real DOM
Only the necessary changes are applied.

### Angular equivalent
Angular bootstraps via platformBrowserDynamic and the root component, then runs change detection.

### Interview question
What is the difference between React rendering and Angular change detection?

---

## 9. Component Architecture in React

### Functional components
React components are functions that return JSX.

```tsx
function Welcome({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>;
}
```

### Angular equivalent
Angular components are classes with decorators and template markup.

### JSX
JSX is a syntax extension that looks like HTML but is actually compiled to JavaScript.

```tsx
const element = <h1>Hello</h1>;
```

### Props
Props are inputs passed from parent to child.

```tsx
function Profile({ user }: { user: { name: string } }) {
  return <div>{user.name}</div>;
}
```

### Children
Children are content passed between component tags.

```tsx
function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}
```

### Composition
React favors composition over inheritance.

### Fragments
Fragments allow grouping without adding extra DOM nodes.

```tsx
<> <h1>Title</h1> <p>Body</p> </>
```

### Conditional rendering
```tsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

### Lists and keys
```tsx
{items.map((item) => <li key={item.id}>{item.name}</li>)}
```

### Angular equivalent
- Components ↔ Angular components
- Props ↔ @Input
- Children ↔ projected content
- Fragments ↔ ng-container
- Conditional rendering ↔ *ngIf
- Lists ↔ *ngFor

### Common mistake
Angular developers often overuse state or try to mimic Angular two-way binding directly.

---

## 10. JSX Deep Dive

### Why JSX exists
JSX makes the UI structure readable and declarative. It is syntactic sugar for function calls to React.createElement.

### Babel conversion
```tsx
const element = <h1>Hello</h1>;
```

becomes roughly:

```js
const element = React.createElement('h1', null, 'Hello');
```

### React.createElement
This creates a React element object, which is then used by React to build the virtual tree.

### Virtual DOM creation
Each JSX element becomes a React element object with type, props, and children.

### Comparison with Angular template compiler
Angular compiles templates into instructions for Angular’s renderer. React compiles JSX into JavaScript objects and then uses its renderer to reconcile them.

### Interview question
What is the difference between JSX and HTML?

### Best practice
Use JSX for structure, keep logic minimal, and move complex logic into functions and hooks.

---

## 11. React State Management: useState and Beyond

### useState
The most common state primitive in React.

```tsx
const [count, setCount] = useState(0);
```

### How it works internally
React stores state in a fiber and updates it when the setter is called. The component is scheduled for re-render.

### Re-rendering
A component re-renders when its state or props change.

### Batch updates
React batches state updates in event handlers for performance.

```tsx
setCount(count + 1);
setCount(count + 1);
```

This may not increase the count twice in one event if you use stale state. Use functional updates instead:

```tsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

### Immutable updates
React state should be updated immutably.

```tsx
setItems((prev) => [...prev, newItem]);
```

### Angular equivalents
| React | Angular |
|---|---|
| useState | component field or signal |
| useReducer | state reducer or NgRx | 
| Context | service + BehaviorSubject or DI |
| Redux Toolkit | NgRx |

### Common mistake
Angular developers often expect React to behave like Angular’s two-way binding. In React, state is explicit and controlled.

### Performance implications
State updates can cause re-renders. Keep state local when possible and split large state objects into smaller pieces.

---

## 12. React Lifecycle: useEffect and the Angular Mental Model

### Angular lifecycle comparison
| Angular | React |
|---|---|
| ngOnInit | useEffect with empty deps |
| ngAfterViewInit | useEffect after mount, often with refs |
| ngOnDestroy | cleanup in useEffect |
| ngOnChanges | useEffect when props change |
| ngDoCheck | custom checks or memoization logic |

### useEffect
```tsx
useEffect(() => {
  console.log('mounted');

  return () => console.log('cleanup');
}, []);
```

### Dependency array
- Empty array: run once on mount.
- No array: run after every render.
- Array of values: run when those values change.

### Strict Mode
In development, React intentionally mounts, unmounts, and remounts components to expose side effects issues.

### Common mistake
Using effects for state that can be derived instead of stored.

### Best practice
Prefer deriving state from props and memoized values; reserve effects for side effects like subscriptions, timers, and API calls.

---

## 13. React Hooks in Depth

### useState
Purpose: local state.
Angular equivalent: component state, signal, or simple service state.
Best practice: keep state close to the UI that uses it.

### useEffect
Purpose: side effects after render.
Angular equivalent: ngOnInit plus cleanup in ngOnDestroy.
Best practice: keep effect logic small and predictable.

### useRef
Purpose: mutable values that do not trigger re-render.
Angular equivalent: ViewChild or DOM references.
Best practice: use for DOM refs and imperative handles.

### useMemo
Purpose: memoize expensive calculations.
Angular equivalent: memoization patterns or pure functions.
Best practice: use only when needed; avoid premature optimization.

### useCallback
Purpose: memoize functions to prevent re-creation.
Angular equivalent: manual function caching or service methods.
Best practice: use with stable dependencies.

### useContext
Purpose: share state without prop drilling.
Angular equivalent: DI services and BehaviorSubject or signals.
Best practice: keep context values small and focused.

### useReducer
Purpose: manage complex state transitions.
Angular equivalent: NgRx reducers or a well-structured service state machine.
Best practice: use for state machines and complex forms.

### useId
Purpose: generate stable IDs for accessibility and SSR consistency.
Angular equivalent: unique IDs generated manually or in directives.

### useTransition
Purpose: mark non-urgent updates.
Angular equivalent: not a direct one-to-one concept.
Best practice: use for large UI updates that should not block input.

### useDeferredValue
Purpose: defer expensive updates.
Angular equivalent: a scheduling concern not directly mirrored.

### useLayoutEffect
Purpose: run after DOM mutations but before paint.
Angular equivalent: not directly present in Angular.
Best practice: use sparingly.

### useImperativeHandle
Purpose: expose imperative methods to parent components.
Angular equivalent: ViewChild and directive API exposure.

### Custom hooks
Purpose: reuse logic across components.
Angular equivalent: shared utility services or composables-like abstractions.
Best practice: name them starting with use and keep them focused.

---

## 14. Routing with React Router

### React Router basics
```tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Angular equivalent
Angular Router with routes, router-outlet, and route guards.

### Nested routing
```tsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<Overview />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

### Dynamic routes
```tsx
<Route path="/customers/:id" element={<CustomerDetail />} />
```

### Protected routes
```tsx
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = true;
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}
```

### Route guards equivalent
- React Router does not have a built-in guard system like Angular.
- You implement route protection as wrapper components or a layout-based guard.

### Best practice
Keep route config centralized and use route-based layouts.

---

## 15. Forms in React

### Controlled components
```tsx
function Input() {
  const [value, setValue] = useState('');

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
```

### Uncontrolled components
```tsx
function Input() {
  const ref = useRef<HTMLInputElement>(null);

  return <input ref={ref} />;
}
```

### React Hook Form
React Hook Form is the most common enterprise choice for complex forms.

```tsx
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit } = useForm();

  return <form onSubmit={handleSubmit((data) => console.log(data))}>...</form>;
}
```

### Formik
Formik is another popular option, especially for complex validation flows.

### Angular equivalent
- Controlled components ↔ reactive forms
- Uncontrolled components ↔ template-driven forms
- React Hook Form ↔ reactive forms with manual control
- Formik ↔ form libraries with model-based validation

### Best practice
Use form libraries for complex forms. Use native controlled components for simple forms.

---

## 16. API Calls, Async/Await, Error Handling, and AbortController

### fetch
```tsx
async function loadUsers() {
  const response = await fetch('/api/users');
  if (!response.ok) throw new Error('Failed');
  return response.json();
}
```

### Axios
Axios is still common in enterprise React apps.

```tsx
import axios from 'axios';

const response = await axios.get('/api/users');
```

### Error handling
```tsx
try {
  const data = await loadUsers();
} catch (error) {
  console.error(error);
}
```

### Loading and retry
Use loading state and retry strategies for resilience.

### AbortController
```tsx
const controller = new AbortController();

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/users', { signal: controller.signal });
      const data = await response.json();
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error(error);
      }
    }
  };

  fetchData();

  return () => controller.abort();
}, []);
```

### Angular equivalent
Angular HttpClient plus interceptors and RxJS error handling.

### Best practice
Create dedicated service wrappers for API access instead of calling fetch directly in components.

---

## 17. Folder-Wise Component Creation: Enterprise Pattern

### Shared components
Examples: Button, Input, Modal, Card, Table.

### Feature components
Examples: LoginForm, TransferForm, CustomerList.

### Containers vs presentational components
- Presentational components: render UI, receive props, no business logic.
- Container components: fetch data, manage state, orchestrate child components.

### Angular equivalent
- Presentational components ↔ dumb components
- Containers ↔ smart components or feature components

### Example structure
```text
src/components/common/Button.tsx
src/components/common/Modal.tsx
src/features/payments/components/TransferForm.tsx
src/features/payments/pages/PaymentsPage.tsx
```

### Best practice
Keep shared components generic and feature components domain-specific.

---

## 18. Context API

### What it is
Context provides a way to share values through the component tree without passing props manually.

```tsx
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

### Angular equivalent
Angular DI services, BehaviorSubject, or signals for shared state.

### Why React does it differently
React is more explicit with state sharing via context and hooks, while Angular often uses DI and services.

### When to use it
- app-wide theme
- auth context
- locale / language

### Common mistake
Using context for everything. It is not a full state management solution for large, highly dynamic apps.

---

## 19. Redux, Redux Toolkit, and RTK Query

### Why Redux exists
Redux provides a predictable global state container with actions, reducers, and a single store.

### React Toolkit
Redux Toolkit simplifies Redux setup and reduces boilerplate.

### Slice
```tsx
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
  },
});
```

### Angular equivalent
NgRx.

### When to use Redux
- large shared state
- complex update flows
- teams that want explicit state boundaries

### When not to use Redux
- simple local state
- small apps
- state that can be handled by context or local component state

### RTK Query
RTK Query is a data-fetching and caching layer built on Redux Toolkit.

### Best practice
Use Redux Toolkit only when state is genuinely shared and complex.

---

## 20. Performance Optimization

### React.memo
```tsx
const MemoizedComponent = React.memo(function MyComponent(props) {
  return <div>{props.data}</div>;
});
```

### useMemo
Memoizes expensive computed values.

### useCallback
Memoizes functions to avoid re-creation.

### Lazy Loading
```tsx
const Dashboard = lazy(() => import('./pages/Dashboard'));
```

### Suspense
```tsx
<Suspense fallback={<Spinner />}> <Dashboard /> </Suspense>
```

### Virtualization
Useful for large lists.

### Key prop
Always use stable keys for list items.

### Angular equivalent
- React.memo ↔ change detection optimization
- Lazy loading ↔ lazy-loaded modules
- Virtualization ↔ CDK virtual scroll

### Best practice
Measure before optimizing. Avoid premature optimization.

---

## 21. Styling in React

### CSS
Simple global styles.

### CSS Modules
Scoped CSS for components.

```css
/* Button.module.css */
.button { color: red; }
```

### SCSS
Good for design systems and large apps.

### Tailwind
Utility-first styling, very common in modern React teams.

### Styled Components / Emotion
Component-scoped CSS-in-JS.

### Material UI / Chakra UI
Component libraries with built-in design systems.

### Angular equivalent
Angular Material is the closest counterpart.

### Best practice
Choose a styling strategy consistently across the team.

---

## 22. React Ecosystem Overview

### Routing
React Router

### Forms
React Hook Form, Formik

### Tables
TanStack Table

### Charts
Recharts, Nivo, ECharts

### State management
Redux Toolkit, Zustand, Jotai

### HTTP
Axios, TanStack Query

### Authentication
Auth0, Clerk, NextAuth

### Testing
Vitest, Jest, Testing Library

### UI libraries
MUI, Chakra UI, Ant Design, Radix UI

### Animation
Framer Motion

### Icons
Lucide React, React Icons

---

## 23. Authentication in React

### JWT flow
1. User logs in.
2. Server returns access token and refresh token.
3. App stores tokens securely.
4. Access token is attached to API requests.
5. Refresh token is used when access token expires.

### Protected routes
Use a wrapper that checks auth state before rendering a route.

### Storage considerations
Use httpOnly cookies where possible for better security. In SPAs, localStorage is common but less secure for sensitive tokens.

### Angular equivalent
Angular auth guards, interceptors, and service-based auth flows.

### Best practice
Keep auth logic in a dedicated auth service or context.

---

## 24. Environment Variables

### Vite env variables
Vite uses variables prefixed with VITE_.

```env
VITE_API_URL=https://api.example.com
```

```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

### Build modes
- development
- production

### Angular equivalent
Angular environment.ts files and build-specific configs.

### Best practice
Never put secrets in client-side environment variables.

---

## 25. Build Process: Vite, Babel, Rollup, Esbuild, and Tree Shaking

### npm run dev
Starts the local development server.

### npm run build
Builds the production bundle.

### npm run preview
Preview the production build locally.

### Vite
Uses esbuild for fast transforms and Rollup for bundling.

### Tree shaking
Removes unused code from the final bundle.

### Chunks
The build is split into smaller JS chunks for better loading.

### Source maps
Useful for debugging production issues.

### Angular equivalent
Angular CLI uses Webpack and Angular’s own build pipeline.

---

## 26. Deployment

### Vercel
Excellent for Next.js and Vite apps.

### Netlify
Great for static hosting and simple deployments.

### GitHub Pages
Good for demo and documentation sites.

### Firebase
Good for hosting and serverless integration.

### AWS / Azure
Used for enterprise deployments and private infrastructure.

### Docker
Useful for reproducible deployments.

### Angular equivalent
Angular apps are also deployed to these platforms, but the deployment story is usually more framework-specific in React due to the broader ecosystem.

---

## 27. Testing

### Vitest
Fast unit and integration test runner.

### Jest
Popular but slightly heavier than Vitest.

### React Testing Library
Best for testing UI behavior instead of implementation details.

```tsx
import { render, screen } from '@testing-library/react';

it('renders hello', () => {
  render(<div>Hello</div>);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

### Angular equivalent
Jasmine + Karma or newer Angular testing patterns.

### Best practice
Test behavior, not implementation details.

---

## 28. Side-by-Side Comparison Tables

### Core mental model
| Angular | React |
|---|---|
| Framework with conventions | Library with composable ecosystem |
| Templates | JSX |
| Components + decorators | Functional components |
| DI | Context + props + hooks |
| RxJS | State + hooks + external stores |

### State and data flow
| Angular | React |
|---|---|
| Component properties and services | Props and state |
| Signals | useState / useReducer |
| BehaviorSubject | custom hooks / context / external store |
| NgRx | Redux Toolkit / Zustand |

### Lifecycle
| Angular | React |
|---|---|
| ngOnInit | useEffect([]) |
| ngAfterViewInit | useEffect + refs |
| ngOnDestroy | cleanup function |
| ngOnChanges | effect tied to props |

### Routing
| Angular | React |
|---|---|
| RouterModule | react-router-dom |
| RouterOutlet | Outlet |
| Route guards | wrapper components / route guards |

### Forms
| Angular | React |
|---|---|
| Reactive Forms | React Hook Form |
| Template-driven forms | uncontrolled inputs |
| FormBuilder | form libraries |

---

## 29. Enterprise Banking Dashboard Walkthrough

Imagine you are building a banking dashboard in React.

### Suggested structure
```text
src/
  features/dashboard/
    components/
      SummaryCard.tsx
      AccountList.tsx
      TransactionTable.tsx
    pages/
      DashboardPage.tsx
    hooks/
      useDashboardData.ts
    services/
      dashboardApi.ts
```

### Why this structure works
- UI is separated from data fetching.
- Business logic is isolated in hooks/services.
- Components remain reusable.

### Angular equivalent
This is very similar to a feature module with components, services, and route components.

### Interview angle
Explain how you would structure a banking dashboard to keep the codebase scalable, testable, and easy to maintain.

---

## 30. Interview Preparation: High-Value Questions

### 1. What is the difference between React and Angular?
Answer: React is a UI library with a flexible ecosystem, while Angular is a full framework with built-in conventions. React is more compositional; Angular is more opinionated.

### 2. What is the Virtual DOM?
Answer: It is an in-memory representation of the UI tree that React uses to diff changes and minimize DOM updates.

### 3. What is reconciliation?
Answer: It is the process of comparing the previous and new virtual trees to decide what changed.

### 4. What is the difference between useEffect and useLayoutEffect?
Answer: useLayoutEffect runs before paint, while useEffect runs after paint.

### 5. Why is useState asynchronous in effect-like behavior?
Answer: React batches updates for performance, so state updates are scheduled and processed together.

### 6. What is the difference between useMemo and useEffect?
Answer: useMemo memoizes a calculated value; useEffect handles side effects.

### 7. What is the difference between Context and Redux?
Answer: Context is for sharing values; Redux is a structured global state management solution for complex state flows.

### 8. What is the difference between props and state?
Answer: Props are inputs from a parent; state is internal mutable data managed by the component.

### 9. How would you optimize a large React list?
Answer: Use virtualization, stable keys, memoization, and avoid unnecessary re-renders.

### 10. How do you handle authentication in React?
Answer: Use protected routes, auth context or service, and secure token handling strategies.

---

## 31. Common Mistakes Angular Developers Make in React

- Treating React like Angular and expecting Angular-style modules and DI everywhere.
- Using context for everything instead of local state.
- Updating state incorrectly by mutating objects directly.
- Forgetting to use keys in lists.
- Using effects for things that can be derived from props or state.
- Overusing Redux for simple state.
- Trying to force two-way binding patterns from Angular into React.

### The Angular-to-React translation mindset
Think in terms of:
- state instead of component fields
- props instead of @Input
- hooks instead of lifecycle methods
- composition instead of module-based structure
- explicit effects instead of implicit change detection

---

## 32. Best Practices for React in Enterprise Teams

- Prefer TypeScript everywhere.
- Use a clear folder-by-feature structure.
- Keep components small and focused.
- Separate UI, state, and side effects.
- Use hooks for reusable logic.
- Centralize API access in services or hooks.
- Keep shared UI components generic.
- Use testing libraries for behavior-driven tests.
- Measure performance before optimizing.

---

## 33. Final Mental Model

If you already know Angular, the fastest way to think about React is this:

- Component = UI unit
- Props = input contract
- State = local mutable data
- Hooks = lifecycle + state helpers
- Context = lightweight shared state
- Router = route-driven composition
- Effects = side effects
- Redux = global application state

React is not “Angular without the framework.” It is a library that gives you a very powerful rendering model and leaves the rest of the architecture to the ecosystem.

That is exactly why React is so popular in modern product teams: it is simple at the core, but scalable when you build around it deliberately.

---

## 34. Recommended Learning Path for an Angular Developer

1. Build a small Todo app in React with useState and props.
2. Add routing and a simple form.
3. Introduce a custom hook and context.
4. Replace local state with Redux Toolkit for a larger feature.
5. Add API calls, loading states, and error handling.
6. Add tests and performance optimizations.
7. Build a small banking dashboard to mirror enterprise patterns.

---

## 35. Short Interview Summary

If you are asked in an interview, say this:

“React is a declarative UI library built around component composition, virtual DOM reconciliation, and state-driven rendering. Compared to Angular, it is less opinionated and more ecosystem-driven. I would structure a React app by feature, use hooks for reusable logic, use context for lightweight shared state, use Redux Toolkit or similar for complex cross-cutting state, and ensure performance through memoization, lazy loading, and careful state boundaries.”
