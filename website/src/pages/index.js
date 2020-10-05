import Layout from "@theme/Layout";
import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const Block = props => (
  <div
    className="container"
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}
    >
    <GridBlock
      align="center"
      contents={props.children}
      layout={props.layout}
    />
  </div>
);

const SingleSignOn = () => (
  <div className="container ">
    {[
      {
        content: 
          `Single Sign On is an important security feature that automatically authenticate your users using credentials from your company.</br>` +
          `</br>Feedback House supports multiple login strategies, that can be even used simultaneously.</br>` +
          `</br>Check the [**Single Sign On**](/docs/single-sign-on-getting-started.html) documentation.`,
        image: useBaseUrl('img/undraw_youtube_tutorial.svg'),
        imageAlign: 'right',
        title: 'Single Sign On',
      },
    ]}
  </div>
);

const TryOut = () => (
  <div className="container">
    {[
      {
        content:
          'Developers can leverage multiple APIs to automate the user life cycle.</br>' +
          '</br>Check API Documentation [**API Getting Started**](/docs/api-getting-started)', 
        image: useBaseUrl('img/undraw_code_review.svg'),
        imageAlign: 'left',
        title: 'API Integration',
      },
    ]}
  </div>
);

const Description = () => (
  <div className="container ">
    {[
      {
        content: 
          'Create and integrate your own modules into the Feedback House platform.</br>' +
          '</br>Access millions of users and benefit from a fully engagement ecosystem.',
        image: useBaseUrl('img/undraw_note_list.svg'),
        imageAlign: 'right',
        title: 'Coming soon! Create your Own Modules',
      },
    ]}
  </div>
);


export default () => {
  return <Layout >
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <h1 className="hero__title">Feedback House for Developers</h1>
        <p className="hero__subtitle">One stop shop for teams</p>
        
          <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
            )}
            to={useBaseUrl('docs/')}>
            Get Started
          </Link>
     
      </div>
    </header>
  </Layout>;
};
      // <TryOut />
      // <Description />
      






// const React = require('react');

// const CompLibrary = require('../../core/CompLibrary.js');

// const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
// const Container = CompLibrary.Container;
// const GridBlock = CompLibrary.GridBlock;




//     const ProjectTitle = () => (
//       <h2 className="projectTitle">
//         {siteConfig.title}
//         <small>{siteConfig.tagline}</small>
//       </h2>
//     );

//     const PromoSection = props => (
//       <div className="section promoSection">
//         <div className="promoRow">
//           <div className="pluginRowBlock">{props.children}</div>
//         </div>
//       </div>
//     );

//     const Button = props => (
//       <div className="pluginWrapper buttonWrapper">
//         <a className="button" href={props.href} target={props.target}>
//           {props.children}
//         </a>
//       </div>
//     );

//     return (
//       <SplashContainer>
//         {/*<Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />*/}
//         <div className="inner">
//           <ProjectTitle siteConfig={siteConfig} />
//           <PromoSection>
//             {/*<Button href="#try">Try It Out</Button>*/}
//             <Button href={docUrl('getting-started.html')}>Getting Started</Button>
//             <Button href={docUrl('single-sign-on-getting-started.html')}>Single Sign On</Button>
//             <Button href={docUrl('api-getting-started.html')}>API Documentation</Button>
//           </PromoSection>
//         </div>
//       </SplashContainer>
//     );
//   }
// }

// class Index extends React.Component {
//   render() {
//     const {config: siteConfig, language = ''} = this.props;
//     const {baseUrl} = siteConfig;









//     return (
//       <div>
//         <HomeSplash siteConfig={siteConfig} language={language} />
//         <div className="mainContainer">
//           <SingleSignOn />
//           <TryOut />
//           <Description />
//         </div>
//       </div>
//     );
//   }
// }

// module.exports = Index;
