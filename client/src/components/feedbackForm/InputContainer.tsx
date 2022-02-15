import BasicDropdown from '../../ui/BasicDropdown';
import TextArea from '../../ui/TextArea';
import TextInput from '../../ui/TextInput';

interface Props {
  heading: string;
  description: string;
  name: string;
  type: 'text' | 'dropdown' | 'textarea';
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  list?: string[];
}

const InputContainer = ({
  heading,
  description,
  name,
  type,
  state,
  setState,
  list,
}: Props) => {
  return (
    <div>
      <label htmlFor={name}>
        <h2 className='text-body3 font-bold text-navy '>{heading}</h2>
        <p className='text-body3 text-lightNavy  '>{description}</p>
      </label>

      <div className='my-4 '>
        {type === 'text' ? (
          <TextInput name={name} id={name} state={state} setState={setState} />
        ) : type === 'dropdown' && list ? (
          <BasicDropdown list={list} state={state} setState={setState} />
        ) : (
          <TextArea
            name={name}
            state={state}
            setState={setState}
            rows={5}
            cols={400}
          />
        )}
      </div>
    </div>
  );
};

export default InputContainer;
