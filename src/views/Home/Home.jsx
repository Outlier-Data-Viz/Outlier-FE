import { Link } from 'react-router-dom';
import layout from '../../styles/layout.css'
import text_styles from '../../styles/text.css'
import logo from '../../styles/utlier.png';

export default function Home() {

  return (
    <section>
      <div>
        <div className={layout.banner}>
          <div className={layout.logo_container}>
             <img src={logo} alt='outlier' className={layout.logo}/>
          </div>
          {/* <h1>
            {' '}
            Welcome to <br /> <strong>Outlier</strong>
          </h1> */}
        </div>
        <div className={layout.left}>
          <div className={text_styles.spotlight}>
            Our goal is giving you new way to gain knowledge in order to enhance{' '}
            <strong> your safety</strong>, your ability to{' '}
            <strong>advocate for funding</strong>, and your{' '}
            <strong>access to services</strong>.
          </div>
        </div>
      </div>

      <div className={layout.section}>
        <h2>
          how it <br />
          works
        </h2>
        <p className={layout.text}>
          <div>
            On the <Link to={'/map'}>map</Link> you can select two states by
            clicking directly on them. You can also swirl it around and zoom in
            and out! Then you can pick the population that you want to know more
            about and two states that matter to you. Finally, pick whether you
            want to see the data displayed in a bar chart or a scatter plot.
          </div>
          <div>
            Then you will be redirected to the data page, where you will see the
            statistics for the hate crimes in each state based on population.
            Hover over each data point to see the associated data value. You can
            interact with your chart similarly to the map, zoom in an out and
            turn it to get different views.
          </div>
        </p>
      </div>
    </section>
  );
}
