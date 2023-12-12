import {
  ListItemValues,
  ListValues,
  SectionValues,
  Strong,
  TitleValues,
  TitleValuesText,
} from './Values.styled';

export const Values = () => {
  return (
    <SectionValues>
      <TitleValues>Our Values</TitleValues>
      <TitleValuesText>
        At "GTA Rent", we are guided by a set of core values that define who we
        are and how we operate.
      </TitleValuesText>

      <ListValues>
        <ListItemValues>
          <p>
            <Strong>Customer Satisfaction:</Strong> Putting our customers' needs
            first and ensuring their satisfaction is our top priority.
          </p>
        </ListItemValues>
        <ListItemValues>
          <p>
            <Strong>Reliability:</Strong> Providing reliable and well-maintained
            vehicles to ensure a safe and comfortable journey for our clients.
          </p>
        </ListItemValues>
        <ListItemValues>
          <p>
            <Strong>Transparency:</Strong> Operating with transparency in
            pricing, terms, and conditions for a trusting relationship with our
            customers.
          </p>
        </ListItemValues>
        <ListItemValues>
          <p>
            <Strong>Environmental Responsibility:</Strong> Committing to
            environmentally friendly practices in our fleet management and
            operations.
          </p>
        </ListItemValues>
      </ListValues>
    </SectionValues>
  );
};
