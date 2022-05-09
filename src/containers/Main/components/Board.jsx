import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases, critical } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
        <Card value={getValue(cases).toLocaleString("pt-BR")} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(todayDeaths).toLocaleString("pt-BR")} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(todayCases).toLocaleString("pt-BR")} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(deaths).toLocaleString("pt-BR")} label="Total de mortos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(recovered).toLocaleString("pt-BR")} label="Recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(critical).toLocaleString("pt-BR")} label="Pacientes criticos" color="purple" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)