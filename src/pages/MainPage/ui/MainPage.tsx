import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page/Page';
import { BugButton } from '../../../app/providers/ErrorBoundary';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <BugButton />
            <Counter />
        </Page>
    );
}

export default MainPage;
