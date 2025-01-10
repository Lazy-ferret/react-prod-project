/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Code.module.scss';
import { Button } from '../Button/Button';

interface CodeProps {
    className?: string;
    children: ReactNode;
}

export const Code = ({ className, children }: CodeProps) => (
    <pre className={classNames(cls.Code, {}, [className])}>
        <Button className={cls.copyBtn}>Копировать</Button>
        <code>
            {children}
        </code>
    </pre>

);
