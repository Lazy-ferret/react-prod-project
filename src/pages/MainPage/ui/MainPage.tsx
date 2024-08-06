import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { BugButton } from '../../../app/providers/ErrorBoundary';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            <Counter />
            {t('Главная страница')}
        </div>
    );
}

export default MainPage;
