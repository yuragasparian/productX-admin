import * as React from "react";

interface ButtonProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({...props}:ButtonProps) => {
  return (
    <textarea {...props} className="h-69.5 w-full py-3 px-4 border rounded-2xl resize-none focus-visible:outline-none">

    </textarea>
  );
};

export default Textarea;
