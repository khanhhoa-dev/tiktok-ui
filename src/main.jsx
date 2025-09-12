import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './components/index.jsx';
import App from './App.jsx';
import './components/GlobalStyle.scss';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </StrictMode>
);
