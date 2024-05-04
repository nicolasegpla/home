import { AllRooms } from './index';


export default {
  component: AllRooms,

};

export const Primary = (args) => <AllRooms {...args} />;
Primary.args = {
  primary : true,
  title: "Habitacion principal",
}

export const Secondary = {
  render: () => <AllRooms secondary title="Habitacion dos" />,
}