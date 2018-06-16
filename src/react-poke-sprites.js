import React from 'react';
import pokemonGif from 'pokemon-gif';
import pokemonPropType from './pokemon-prop';
import PropTypes from 'prop-types';
import pokemonNumberToName from 'pokemon-gif/lib/pokedex-number-to-name';

class PokeSprite extends React.Component {
	render() {
		const { pokemon, shiny, className } = this.props;
		const name = typeof pokemon === 'string' ? pokemon : pokemonNumberToName[pokemon];
		const isShiny = typeof shiny === 'boolean' ? shiny : false;
		return (
			<img
				src={pokemonGif(name, isShiny)}
				alt={name}
				className={className}
			/>

		)
	}
}

PokeSprite.defaultProps = {
	className: '',
}

PokeSprite.propTypes = {
	pokemon: pokemonPropType.isRequired,
	className: PropTypes.string
}

export default PokeSprite;
