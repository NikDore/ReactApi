import ReactDOM from 'react-dom/client';
import App from './application/App';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);
