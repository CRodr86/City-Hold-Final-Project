"""empty message

Revision ID: e881ef600d10
Revises: 
Create Date: 2022-03-21 12:41:29.219895

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e881ef600d10'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('project',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('area', sa.String(length=200), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('general_description', sa.String(length=1000), nullable=False),
    sa.Column('image', sa.String(length=800), nullable=False),
    sa.Column('start', sa.String(length=800), nullable=False),
    sa.Column('cost', sa.String(length=800), nullable=False),
    sa.Column('taxes', sa.String(length=800), nullable=False),
    sa.Column('developer', sa.String(length=800), nullable=False),
    sa.Column('jobs', sa.String(length=800), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('lastname', sa.String(length=80), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('home_phone', sa.String(length=20), nullable=True),
    sa.Column('mobile_phone', sa.String(length=20), nullable=False),
    sa.Column('address1', sa.String(length=240), nullable=True),
    sa.Column('address2', sa.String(length=240), nullable=True),
    sa.Column('zip_code', sa.String(length=20), nullable=False),
    sa.Column('years_of_residence', sa.String(length=20), nullable=False),
    sa.Column('password', sa.String(length=1000), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('mobile_phone')
    )
    op.create_table('proposal',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('area', sa.String(length=20), nullable=False),
    sa.Column('proposal_type', sa.String(length=20), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.Column('description', sa.String(length=1000), nullable=False),
    sa.Column('documents', sa.String(length=120), nullable=False),
    sa.Column('document_type', sa.String(length=20), nullable=False),
    sa.Column('document_description', sa.String(length=1000), nullable=True),
    sa.Column('contact_by', sa.String(length=20), nullable=False),
    sa.Column('confirmation_by', sa.String(length=20), nullable=False),
    sa.Column('proponent_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['proponent_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('proposal')
    op.drop_table('user')
    op.drop_table('project')
    # ### end Alembic commands ###
