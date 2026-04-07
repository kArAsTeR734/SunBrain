import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { FC, memo } from 'react';
import './HomeworkContent.scss';

interface Props {
  content: string;
}

export const MarkdownContent: FC<Props> = memo(({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        img: ({ ...props }) => (
          <span className="content">
            <img {...props} className="content__img" alt={props.alt} />
          </span>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
});
