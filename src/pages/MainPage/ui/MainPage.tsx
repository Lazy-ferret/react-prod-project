import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { BugButton } from '../../../app/providers/ErrorBoundary';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
            <Counter />
        </div>
    );
}

export default MainPage;
