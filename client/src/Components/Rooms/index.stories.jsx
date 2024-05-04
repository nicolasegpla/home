import { Rooms } from './index';


export default {
  component: Rooms,

};

export const Primary = (args) => <Rooms {...args} />;
Primary.args = {
  primary : true,
  title: "Habitacion principal",
}

export const Secondary = {
  render: () => <Rooms secondary title="Habitacion dos" />,
}