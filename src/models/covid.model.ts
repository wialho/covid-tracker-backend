// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const covid = sequelizeClient.define('covid', {
    iso_code: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      continent: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      location: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      total_cases: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_cases: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_cases_smoothed: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      total_deaths: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_deaths: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_deaths_smoothed: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      total_cases_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_cases_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_cases_smoothed_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      total_deaths_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_deaths_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_deaths_smoothed_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      reproduction_rate: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      icu_patients: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      icu_patients_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      hosp_patients: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      hosp_patients_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      weekly_icu_admissions: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      weekly_icu_admissions_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      weekly_hosp_admissions: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      weekly_hosp_admissions_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      total_tests: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_tests: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      total_tests_per_thousand: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_tests_per_thousand: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_tests_smoothed: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_tests_smoothed_per_thousand: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      positive_rate: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      tests_per_case: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      tests_units: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      total_vaccinations: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      people_vaccinated: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      people_fully_vaccinated: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      total_boosters: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_vaccinations: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_vaccinations_smoothed: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      total_vaccinations_per_hundred: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      people_vaccinated_per_hundred: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      people_fully_vaccinated_per_hundred: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      total_boosters_per_hundred: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_vaccinations_smoothed_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_people_vaccinated_smoothed: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      new_people_vaccinated_smoothed_per_hundred: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      stringency_index: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      population: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      population_density: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      median_age: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      aged_65_older: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      aged_70_older: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      gdp_per_capita: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      extreme_poverty: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      cardiovasc_death_rate: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      diabetes_prevalence: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      female_smokers: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      male_smokers: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      handwashing_facilities: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      hospital_beds_per_thousand: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      life_expectancy: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      human_development_index: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      excess_mortality_cumulative_absolute: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      excess_mortality_cumulative: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      excess_mortality: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      excess_mortality_cumulative_per_million: {
        type: DataTypes.FLOAT,
        allowNull: true
      }
    }, {
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        }
      }
    });
  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (covid as any).associate = function (models: any): void {
      // Define associations here
      // See https://sequelize.org/master/manual/assocs.html
    };
  
    return covid;
  }