import './App.css';
import { lazy, Suspense } from 'react';
const Component = lazy(() => import('./Component'));
const AnotherComponent = lazy(() => import('./AnotherComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
      <AnotherComponent />
    </Suspense>
  );
}

export default App;
