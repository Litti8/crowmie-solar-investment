import { useProject } from '@hooks/useProject';
import { useChartData } from '@hooks/useChartData';
import { LoadingState } from '@components/common/LoadingState';
import { ErrorState } from '@components/common/ErrorState';
import { ProjectHeader } from '@components/project/ProjectHeader';
import { InvestmentMetrics } from '@components/project/InvestmentMetrics';
import { ProjectMap } from '@components/project/ProjectMap';
import { ProjectChart } from '@components/project/ProjectChart';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

const ProjectDetailPage = () => {
  const { t, i18n } = useTranslation();
  const projectId = '655c88d12c82187ff21c7bc2';
  const { data: project, isLoading: projectLoading, error: projectError, refetch } = useProject(projectId);
  const { data: chartData, isLoading: chartLoading } = useChartData(projectId);

  if (projectLoading || chartLoading) return <LoadingState />;
  if (projectError) return <ErrorState message={projectError.message} onRetry={() => refetch()} />;
  if (!project) return <ErrorState message={t('errors.projectNotFound')} />;

  // Seleccionar descripción según idioma actual
  const description = i18n.language === 'en' 
    ? project.descriptions.en 
    : project.descriptions.es;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ProjectHeader
        name={project.name}
        address={project.address}
        power={project.power}
        status={project.status}
        mainImage={project.mainImage}
      />

      <Box sx={{ my: 4 }}>
        <InvestmentMetrics
          price={project.price}
          tir={project.tir}
          annualReturn={project.annual_return}
          projectLife={project.project_life}
          totalInvestors={project.totalInvestors}
        />
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom fontWeight={600}>
                {t('project.sections.description')}
              </Typography>
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{ __html: description }}
                sx={{ '& p': { mb: 2 } }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom fontWeight={600}>
                {t('project.sections.location')}
              </Typography>
              <ProjectMap locations={project.locations} projectName={project.name} />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom fontWeight={600}>
                {t('project.sections.performance')}
              </Typography>
              {chartData?.processedData && (
                <ProjectChart data={chartData.processedData} />
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom fontWeight={600}>
                {t('project.sections.promoters')}
              </Typography>
              <Grid container spacing={2}>
                {project.promoters.map((promoter) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={promoter._id}>
                    <Box
                      sx={{
                        p: 2,
                        border: 1,
                        borderColor: 'divider',
                        borderRadius: 2,
                        transition: 'all 0.2s',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: 2,
                        },
                      }}
                    >
                      <Typography variant="h6" fontWeight={600}>
                        {promoter.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {promoter.type}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {promoter.description.substring(0, 100)}...
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectDetailPage;