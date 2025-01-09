import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
// import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
    // <div className={classNames(cls.ArticlesPage, {}, [className])}>
    // eslint-disable-next-line i18next/no-literal-string
        <div>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
