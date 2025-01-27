import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import IconEye from 'shared/assets/icons/eye_Icon.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, article, view } = props;
    const [isHover, bindHover] = useHover();

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListIte, {}, [className, cls[view]])}>
                {article.title}
            </div>
        );
    }

    return (
        <div {...bindHover} className={classNames(cls.ArticleListIte, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <Text className={cls.date} text={article.createdAt} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={IconEye} />
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>

        </div>

    );
};
