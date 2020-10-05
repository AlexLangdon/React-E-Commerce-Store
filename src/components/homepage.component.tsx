import { Card, CardMedia, Container, makeStyles } from "@material-ui/core";
import React from "react";
import "./homepage.component.scss";


const useStyles = makeStyles({
	menuItem: {
		margin: 20,
		padding: 0,
		display: "inline-block"
	},
	itemMedia: {
		height: 300,
		display: "flex",
		alignItems: "flex-end",
		justifyContent: "center",
		backgroundPositionY: "top"
	},
	itemTitle: {
		display: "inline",
		background: "linear-gradient(90deg, transparent, rgb(0,0,0,0.5), transparent)",
		width: "100%",
		textAlign: "center",
		padding: "10px 20px",
		marginBottom: "20px",
		color: "white",
		textShadow: "2px 2px 2px #000000",
		fontSize: "25px",
		fontWeight: 600
	}
});

export default function HomePage() {
	const classes = useStyles();

	return <div className="homepage">
		<Container className="container">
			<div className="row">
				<Card className={`${classes.menuItem} col`} elevation={4}>
					<CardMedia className={classes.itemMedia} image="clothes/hats.jpg">
						<div className={`${classes.itemTitle} align-middle`}>
							HATS
						</div>
					</CardMedia>
				</Card>
				<Card className={`${classes.menuItem} col`} elevation={4}>
					<CardMedia className={classes.itemMedia} image="clothes/jackets.jpg">
						<div className={`${classes.itemTitle} align-middle`}>
							JACKETS
						</div>
					</CardMedia>
				</Card>
				<Card className={`${classes.menuItem} col`} elevation={4}>
					<CardMedia className={classes.itemMedia} image="clothes/shoes.jpg">
						<div className={`${classes.itemTitle} align-middle`}>
							SHOES
						</div>
					</CardMedia>
				</Card>
			</div>
			<div className="row">
				<Card className={`${classes.menuItem} col`} elevation={4}>
					<CardMedia className={classes.itemMedia} image="clothes/womens.jpg">
						<div className={`${classes.itemTitle} align-middle`}>
							WOMENS
						</div>
					</CardMedia>
				</Card>
				<Card className={`${classes.menuItem} col`} elevation={4}>
					<CardMedia className={classes.itemMedia} image="clothes/mens.jpg">
						<div className={`${classes.itemTitle} align-middle`}>
							MENS
						</div>
					</CardMedia>
				</Card>
			</div>
		</Container>
	</div>
}