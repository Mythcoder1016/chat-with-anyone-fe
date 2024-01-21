/// <reference types="react-scripts" />

declare var context: any;
type ScrollScreenType = {
    dataSource: DataSourceType[];
}

type DataSourceType = {
    type: 'send' | 'receive';
    message: string;
    [key: string]: string
}

type MessageType = {
    data: DataSourceType
}

type AvatarType = {
    src: string,
    textAvatar?: string
}

declare module '*.module.less' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
