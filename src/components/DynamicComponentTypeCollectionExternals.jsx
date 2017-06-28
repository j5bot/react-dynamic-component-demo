import React from 'react'; // required to use JSX

export const DynamicComponentTypeCollectionExternals = (props) => {

  // get references to all possible components
  // that this component might render
  const Components = props.components;

  // get the collection of dynamic components we need to render
  const componentCollection = props.collection;

  // A Capitalized reference to reuse
  let Component;

  // A reference to the component's props to reuse
  let componentProps;

  // A function which returns component.props if it exists,
  // and otherwise returns props
  const defaultMapPropsToComponent = function ( component, props ) {
    return component.props || props;
  };

  // render the component collection
  return(
    <div>{
        componentCollection.map(
          ( component ) => {
            // Reference the proper component
            Component = Components[ component.type ];

            // Get the props you want to use for this component instance
            // here we are assuming that you can specify a mapping function
            // on the component definition, in props, or use the default
            componentProps = (
              component.mapPropsToComponent || props.mapPropsToComponent || defaultMapPropsToComponent
            )( component, props );

            return (<Component { ...componentProps } />);
          }
        )
    }</div>
  );
};

export default DynamicComponentTypeCollectionExternals;
