import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img src={block.src} alt={block.title} className={cls.img} />
        {block.title && (
            <Text text={block.title} align={TextAlign.CENTER} />
        )}
    </div>
));
