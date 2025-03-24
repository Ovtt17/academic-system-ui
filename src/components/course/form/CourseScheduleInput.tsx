import { FC } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import ScheduleItem from './ScheduleItem';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const CourseScheduleInput: FC = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'schedules'
  });

  const addSchedule = () => {
    append({ day: 'MONDAY', startTime: '00:00', endTime: '02:00' });
  };

  return (
    <div className="space-y-4 p-4 bg-card rounded-lg shadow-md">
      <h4 className="text-xl md:text-2xl font-bold text-create-button">Schedules</h4>
      <div className="space-y-4">
        {fields.map((field, index) => (
          <Disclosure key={field.id} as="div" className="bg-midnight-black rounded-md">
            {({ open }) => (
              <>
                <DisclosureButton className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-white bg-midnight-black rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-create-button">
                  <span>Schedule {index + 1}</span>
                  {open ? (
                    <ChevronUpIcon className="w-5 h-5 text-create-button" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-create-button" />
                  )}
                </DisclosureButton>
                <DisclosurePanel className="p-4 bg-card rounded-b-md">
                  <ScheduleItem index={index} remove={() => remove(index)} />
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
      <button
        type="button"
        onClick={addSchedule}
        className="w-full py-2 rounded-lg font-semibold text-white bg-blue-600 shadow-lg hover:bg-blue-800 transition duration-300"
      >
        + Add Schedule
      </button>
    </div>
  );
};

export default CourseScheduleInput;
