import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './component/index.jsx';
import App from './App.jsx';
import './component/GlobalStyle.scss';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </StrictMode>
);
