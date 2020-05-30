import React from 'react';
import {connect} from "react-redux";
import {fetchPhones, loadMorePhones} from '../../actions';
import {getPhones} from '../../selectors';
import * as R from 'ramda';
import {Link} from "react-router-dom";

class Phones extends React.Component {
    componentDidMount() {
        this.props.fetchPhones();
    }

    renderPhone(phone, index) {
        const shortDescription = `${R.take(60, phone.description)}...`;
        return (
            <div className={'col-sm-4 col-md-4 col-lg-4 books-list'} key={index}>
                <div className={'thumbnail'}>
                    <img
                        className={'img-thumbnail'}
                        src={phone.image}
                        alt={phone.name}
                    />
                    <div className={'caption'}>
                        <h4 className={'pull-right'}>${phone.price}</h4>
                        <h4>
                            <Link to={`/phones/${phone.id}`}>
                                {phone.name}
                            </Link>
                        </h4>
                        <p>{shortDescription}</p>
                        <p className={'itemButton'}>
                            <button className={'btn btn-primary'}>Buy now!</button>
                            <Link
                                to={`/phones/${phone.id}`}
                                className={'btn btn-default'}
                            >
                                More info
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        const {phones, loadMorePhones} = this.props;

        return (
            <div>
                <div className={'books row'}>
                    {phones.map((phone, index) => this.renderPhone(phone, index))}
                </div>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <button
                            onClick={loadMorePhones}
                            className={'btn btn-primary pull-right'}
                        >
                            Load more
                        </button>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    phones: getPhones(state)
});

const mapDispatchToProps = {
    fetchPhones,
    loadMorePhones
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);