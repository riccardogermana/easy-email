export interface ConfigurationPanelProps {
    showSourceCode: boolean;
    jsonReadOnly: boolean;
    mjmlReadOnly: boolean;
    height: string;
    onBack?: () => void;
    compact?: boolean;
}
export declare function ConfigurationPanel({ showSourceCode, height, onBack, compact, jsonReadOnly, mjmlReadOnly, }: ConfigurationPanelProps): JSX.Element | null;
