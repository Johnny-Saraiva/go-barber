import FakesAppointmentsRepository from '@modules/appointments/repositories/fakes/FakesAppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

describe('CreateAppointment', () => {
  it('shoud be able to create a new appointment', async () => {
    const fakesAppointmentsRepository = new FakesAppointmentsRepository();

    const createAppointment = new CreateAppointmentService(
      fakesAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123123');
  });
});
