import * as React from 'react';
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

export default function MyCard(props: { link: string; title: string; icon: any }) {
  return (
    <Grid item xs={12} sm={6}>
      <Link href={props.link} prefetch={false}>
        <Card>
          <CardActionArea>
            <CardContent>
              <h4 style={{ margin: '20px 0' }}>
                <props.icon style={{ fontSize: 25 }} />
                {` ${props.title}`}
              </h4>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
