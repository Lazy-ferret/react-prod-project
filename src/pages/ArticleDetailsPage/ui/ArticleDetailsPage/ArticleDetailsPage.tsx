import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticlesDetailsPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('profile');
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            ARTICLES PAGE
        </div>
    );
};

export default ArticlesDetailsPage;
