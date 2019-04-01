import React, {Component} from 'react';

class DummyArticle extends Component {

    render() {
        return (
            <article className='row'>
                <div className='col-6'>
                    <h2>Lorem ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium maiores pariatur totam!
                        Adipisci cupiditate delectus exercitationem hic ipsam nostrum odit unde vel. Aliquam, consequatur
                        incidunt nemo omnis perferendis quia quod?</p>
                </div>
                <div className='col-6'>
                    <h2>Lorem ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium maiores pariatur totam!
                        Adipisci cupiditate delectus exercitationem hic ipsam nostrum odit unde vel. Aliquam, consequatur
                        incidunt nemo omnis perferendis quia quod?</p>
                </div>

            </article>
        )
    }
}

export default DummyArticle;