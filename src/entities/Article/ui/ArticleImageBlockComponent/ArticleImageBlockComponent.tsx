import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string
}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        ArticleImageBlockComponent
    </div>
);
