import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page/Page';

function ArticleEditPage() {
    const { t } = useTranslation('about');
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page>
            {isEdit ? t('Редактирование статьи с ID = ') + id : t('Создание новой статьи') }
        </Page>
    );
}

export default ArticleEditPage;
