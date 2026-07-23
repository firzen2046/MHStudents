import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function MobileSelect({ value, onChange, options = [], placeholder, id }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        id={id}
        className="w-full h-10 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => {
          const val = typeof opt === 'string' ? opt : opt.value;
          const label = typeof opt === 'string' ? opt : opt.label;
          return (
            <SelectItem key={val} value={val}>
              {label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}