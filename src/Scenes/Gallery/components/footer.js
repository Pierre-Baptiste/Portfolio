import React from 'react';

const Author = ({ isModal, ...props }) => {
	const Tag = props.href ? 'a' : 'span';
  
	return (
	  <Tag
		{...props}
	  />
	);
  };

export const FooterCaption = (props) => {
	const { currentView, isModal } = props;
  const { author } = currentView;
  console.log(currentView)
  
	return (
    <span>
        {author ? (
        <Author
          href={author.url}
          target={author.url ? '_blank' : null}
          isModal={isModal}
		  style={{color: "#fff",textDecoration: 'none'}}
        >
          {author.name}
        </Author>
      ) : null}
    </span>
  );
  };