import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string
}

export const ArticleTextBlockComponent = ({ className }: ArticleTextBlockComponentProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        ArticleTextBlockComponent
    </div>
);
