import { FC } from 'react';
interface Props {
    /**
     * 提示类型
     */
    kind: 'info' | 'positive' | 'negative' | 'warning';
}
declare const Alert: FC<Props>;
export default Alert;
