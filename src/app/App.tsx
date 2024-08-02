import { Suspense, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppRouter } from './providers/router';

function App() {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={() => setIsOpen(true)} type="button">toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aperiam quis molestias numquam vitae reiciendis magnam quaerat eos autem quos.
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
