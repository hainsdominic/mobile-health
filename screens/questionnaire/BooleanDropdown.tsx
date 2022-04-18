import React, { useState } from 'react';
import DropDown from 'react-native-paper-dropdown';

const BooleanDropdown = ({
    state,
    setState,
    label,
}: {
    state: string | null;
    setState: React.SetStateAction<Function>;
    label: string;
}) => {
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <DropDown
            label={label}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={state}
            setValue={(value) => setState(value)}
            list={[
                {
                    label: 'Yes',
                    value: 'Yes',
                },
                {
                    label: 'No',
                    value: 'No',
                },
            ]}
        />
    );
};

export default BooleanDropdown;
