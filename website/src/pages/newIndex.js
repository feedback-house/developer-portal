import React from 'react';

import GridBlock from '../core/GridBlock';
import MarkdownBlock from '../core/MarkdownBlock';
import Container from '../core/Container';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const HomeSplash = (props) => {
  const {siteConfig} = useDocusaurusContext();

  const {language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const SplashContainer = props => (
    <div className="homeContainer">
      <div className="homeSplashFade">
        <div className="wrapper homeWrapper">{props.children}</div>
      </div>
    </div>
  );

  const Logo = props => (
    <div className="projectLogo">
      <img src={props.img_src} alt="Project Logo" />
    </div>
  );

  const ProjectTitle = () => (
    <h2 className="projectTitle">
      {siteConfig.title}
      <small>{siteConfig.tagline}</small>
    </h2>
  );

  const PromoSection = props => (
    <div className="section promoSection">
      <div className="promoRow">
        <div className="pluginRowBlock">{props.children}</div>
      </div>
    </div>
  );

  const Button = props => (
    <div className="pluginWrapper buttonWrapper">
      <a className="button" href={props.href} target={props.target}>
        {props.children}
      </a>
    </div>
  );

  return (
    <SplashContainer>
      {/*<Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />*/}
      <div className="inner">
        <ProjectTitle siteConfig={siteConfig} />
        <PromoSection>
          {/*<Button href="#try">Try It Out</Button>*/}
          <Button href={docUrl('getting-started.html')}>Getting Started</Button>
          <Button href={docUrl('single-sign-on-getting-started.html')}>Single Sign On</Button>
          <Button href={docUrl('api-getting-started.html')}>API Documentation</Button>
        </PromoSection>
      </div>
    </SplashContainer>
  );
}

const Index = (props) => {
  const { language = ''} = props;

  const {siteConfig} = useDocusaurusContext();

  const {baseUrl} = siteConfig;

  const Block = props => (
    <Container
      padding={['bottom', 'top']}
      id={props.id}
      background={props.background}>
      <GridBlock
        align="center"
        contents={props.children}
        layout={props.layout}
      />
    </Container>
  );

  const FeatureCallout = () => (
    <div
      className="productShowcaseSection paddingBottom"
      style={{textAlign: 'center'}}>
      <h2>Feature Callout</h2>
      <MarkdownBlock>These are features of this project</MarkdownBlock>
    </div>
  );

  const TryOut = () => (
    <Block id="try">
      {[
        {
          content:
            'Developers can leverage multiple APIs to automate the user life cycle.</br>' +
            '</br>Check API Documentation [**API Getting Started**](/docs/api-getting-started)',
          image: `${baseUrl}img/undraw_code_review.svg`,
          imageAlign: 'left',
          title: 'API Integration',
        },
      ]}
    </Block>
  );

  const Description = () => (
    <Block background="dark">
      {[
        {
          content:
            'Create and integrate your own modules into the Feedback House platform.</br>' +
            '</br>Access millions of users and benefit from a fully engagement ecosystem.',
          image: `${baseUrl}img/undraw_note_list.svg`,
          imageAlign: 'right',
          title: 'Coming soon! Create your Own Modules',
        },
      ]}
    </Block>
  );

  const SingleSignOn = () => (
    <Block background="light">
      {[
        {
          content:
            `Single Sign On is an important security feature that automatically authenticate your users using credentials from your company.</br>` +
            `</br>Feedback House supports multiple login strategies, that can be even used simultaneously.</br>` +
            `</br>Check the [**Single Sign On**](/docs/single-sign-on-getting-started.html) documentation.`,
          image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
          imageAlign: 'right',
          title: 'Single Sign On',
        },
      ]}
    </Block>
  );

  const Features = () => (
    <Block layout="fourColumn">
      {[
        {
          content: 'This is the content of my feature',
          image: `${baseUrl}img/undraw_react.svg`,
          imageAlign: 'top',
          title: 'Feature One',
        },
        {
          content: 'The content of my second feature',
          image: `${baseUrl}img/undraw_operating_system.svg`,
          imageAlign: 'top',
          title: 'Feature Two',
        },
      ]}
    </Block>
  );

  const Showcase = () => {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const showcase = siteConfig.users
      .filter(user => user.pinned)
      .map(user => (
        <a href={user.infoLink} key={user.infoLink}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      ));

    const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

    return (
      <div className="productShowcaseSection paddingBottom">
        <h2>Who is Using This?</h2>
        <p>This project is used by all these people</p>
        <div className="logos">{showcase}</div>
        <div className="more-users">
          <a className="button" href={pageUrl('users.html')}>
            More {siteConfig.title} Users
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <HomeSplash siteConfig={siteConfig} language={language} />
      <div className="mainContainer">
        {/*          <Features />
        <FeatureCallout /> */}
        <SingleSignOn />
        <TryOut />
        <Description />
        {/*          <Showcase /> */}
      </div>
    </div>
  );
}

export default Index;
