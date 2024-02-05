import { JSX as JSX_2 } from 'react/jsx-runtime';
declare module "Table";

declare interface Column {
    id: string;
    name: string;
    width: number;
    type: ColumnType;
    isVisible: boolean;
    options: Array<Option_2>;
}

declare enum ColumnType {
    Number = "number",
    Text = "text",
    LongText = "longText",
    Select = "select",
    Date = "date",
    MultiSelect = "multiSelect"
}

declare interface Config {
    theme: Partial<ThemeConfig>;
    toolbar: FeatureConfig;
    addRow: FeatureConfig;
    addColumn: FeatureConfig;
    readOnly: FeatureConfig;
    selectRow: FeatureConfig;
    editColumns: FeatureConfig;
    deleteColumns: FeatureConfig;
    hideFields: FeatureConfig;
    rowHeight: FeatureConfig;
    footer: FeatureConfig;
    filtering: FeatureConfig;
    sorting: FeatureConfig;
    grouping: FeatureConfig;
}

declare interface Data {
    id: string;
    [key: string]: string;
}

declare interface FeatureConfig {
    enabled: boolean;
}

declare interface Option_2 {
    name: string;
    value: string;
    color: string;
}

declare function Table({ data, columns, onChange, config, licenseKey, }: {
    data: Array<Data>;
    columns: Array<Partial<Column>>;
    onChange?: (x: any) => void;
    config?: Partial<Config>;
    licenseKey?: string;
}): JSX_2.Element;

export default Table;

declare interface ThemeConfig {
    color: string;
}

export { Data }
