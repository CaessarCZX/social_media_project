import { Link } from 'react-router-dom'
import '../styles/index.css'

export function NotFound () {
  return (
    <section className='full-display bg-dark-fix--1 txt-white'>
      <div className='flx-w100-ctr inflx-col-ctr h100vh gap2'>
        <h2 className='title-big white-box-1'>Not-Found</h2>
        <strong className='title-huge'>404</strong>
        <div className='txt-large txt-we500'>
          <p className='display-Inline'>Go to homepage </p>
          <Link className='txt-sec-dark' to='/'> Here </Link>
        </div>
      </div>
    </section>
  )
}
