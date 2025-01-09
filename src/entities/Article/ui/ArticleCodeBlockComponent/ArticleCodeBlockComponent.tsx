import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string
}

export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
        ArticleCodeBlockComponent
    </div>
);
