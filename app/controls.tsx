import { useCallback, useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { User } from "./types/user";

const Controls = ({ handleSort }: { handleSort: (name: keyof User, type: string) => void }) => {
  const [selectedField, setSelectedField] = useState<string>('name');
  const [selectedDirection, setSelectedDirection] = useState<string>('ascending');
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  useEffect(() => {
    handleSort(selectedField as keyof User, selectedDirection);
  }, [selectedField, selectedDirection]);


  const handleSelectField = (e: SingleValue<{ label: string, value: string }>) => {
    if (!e) return;
    setSelectedField(e.value);
  }

  const handleSelectDirection = (e: SingleValue<{ label: string, value: string }>) => {
    if (!e) return;
    setSelectedDirection(e.value);
  }

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          id="sort-field"
          defaultValue={fieldOptions[0]}
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={handleSelectField}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          id="sort-direction"
          defaultValue={directionOptions[0]}
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={handleSelectDirection}
        />
      </div>
    </div>
  );
};

export default Controls;
