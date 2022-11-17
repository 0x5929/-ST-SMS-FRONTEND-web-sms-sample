import React, { useEffect, useState }  from "react"
import { Grid as MuiGrid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
	BarChart,
	XAxis,
	YAxis,
	Tooltip,
	Bar,
	ResponsiveContainer } from "recharts"

import {createStatisticsStyles} from "./styles"
import Components from '../../../components'
import { getStats } from "../../../services/SMSStatisticsService"
import { useAuthedAxios, useCircularProgress } from "../../../hooks"

const Styles = createStatisticsStyles({
	MuiGrid,
	BaseTypography: Components.BaseTypography,
	BaselineCard: Components.BaseCard
})

function Statistics() {
	const [ stats, setStats ] = useState([])
    const theme = useTheme()
	const [ progressOn, handleSetProgressStatus ] = useCircularProgress()
    const authedAxios = useAuthedAxios()

	useEffect(() => {

		const getStatistics = async () => {
			try {

				const data = await getStats(authedAxios)
				setStats(data)
			}
			catch(err) {
				console.error(err)
			}
		}
		handleSetProgressStatus({progressState: true})
		handleSetProgressStatus({callback: getStatistics, callbackArgs: [], progressState: false})

	}, [authedAxios])

	const {
		chartWidth,
		chartHeight,
		axisStroke,
		axisStyle,
		barFill,
		chartMargins
	} = Styles.ReChartsStyles(theme)

	return (

			<Styles.GridContainer data-testid="statistics-component" container>
				<Styles.Grid item mobile={12}>
					<Styles.Typography text="Statistics" variant="h2"/>
				</Styles.Grid>
				{
					Object.keys(stats).map((key, index)=>(
						<Styles.Grid item laptop={6} key={key}>
							<Styles.Card
								title={`Student ${key}s`}
							>
								<ResponsiveContainer 
									width={chartWidth}
									height={chartHeight}
								>
										<BarChart 
											data={stats[key]}
											margin={chartMargins}
										>
											<XAxis 
												dataKey="year"
												stroke={axisStroke}
												style={axisStyle}
											/>
											<YAxis          
												stroke={axisStroke}
												style={axisStyle}
											/>
											<Tooltip />
											<Bar dataKey="count" fill={barFill} />
										</BarChart>
								</ResponsiveContainer>
							</Styles.Card>
						</Styles.Grid>
					))
				}
				<Components.SimpleBackDrop openBackdrop={progressOn} />
			</Styles.GridContainer>
	)
}



export default React.memo(Statistics)