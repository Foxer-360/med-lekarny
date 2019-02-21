/// <reference types="react" />
interface MenuBlock {
    title: string;
    color: string;
    image: LooseObject;
    icon: LooseObject;
    url: LooseObject;
}
export interface MenuBlocksProps {
    data: {
        menuBlocks: MenuBlock[];
    };
}
declare const MenuBlocks: (props: MenuBlocksProps) => JSX.Element;
export default MenuBlocks;
